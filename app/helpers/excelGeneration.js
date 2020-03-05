const xl = require('excel4node');
const defaultCellStyle = {
    font: {
        color: 'black',
        size: 11
    }
};

exports.mapDataForExcelGeneration = (genralData, tableData, mapper, sheetName = "") => {
    return new Promise((resolve, reject) => {
        try {
            if (mapper.sheetName == "" || mapper.sheetName == undefined || mapper.sheetName == null || sheetName != "") {
                mapper.sheetName = sheetName;
            }
            Object.keys(genralData).forEach(key => {
                mapper.generalDetails.forEach(e => {
                    if (e.key == key) {
                        e.value = genralData[key];
                    }
                })
            })
            mapper.tableData = [];
            tableData.forEach(can => {
                let singleCan = [];
                Object.keys(can).forEach(key => {
                    mapper.tableMapping.forEach(mapping => {
                        if (key == mapping.key) {
                            mapping.value = can[key];
                            canVal = JSON.parse(JSON.stringify(mapping));
                            singleCan.push(canVal);
                        }
                    })
                })
                singleCan.sort((a, b) => (a.pri > b.pri) ? 1 : ((b.pri > a.pri) ? -1 : 0));
                mapper.tableData.push(singleCan)
            })
            resolve(mapper);
        } catch (e) {
            //console.log("Error in mapping : ", e);
        }
    })
}

exports.generateExcelMultipleSheets = (data, gdCol = 3) => {
    return new Promise((resolve, reject) => {
        try {
            let wb = new xl.Workbook();
            let defaultStyle = wb.createStyle(defaultCellStyle);

            data.forEach((dat, index) => {
                let sheetName = dat.sheetName || `Sheet${index + 1}`
                let ws = wb.addWorksheet(sheetName);
                if (dat.styles && dat.styles.length > 0) {
                    dat.styles.forEach(sty => {
                        sty.obj = wb.createStyle(sty.value);
                    })
                }
                let styles = dat.styles;
                let gdArr = dat.generalDetails ? dat.generalDetails : [];
                let thArr = dat.tableHeadders ? dat.tableHeadders : [];
                let tdArr = dat.tableData ? dat.tableData : [];
                let gdLen = gdArr.length;
                let genralRowNum = Math.ceil((gdLen) / gdCol);
                let tableStartRow = genralRowNum + 2;
                let headderCells = [];
                let dataCells = [];
                let i = 0;
                for (let x = 1; x <= genralRowNum; x++) {
                    for (let y = 1; y <= 6; y++) {
                        if (i < gdLen) {
                            if (y % 2 == 0) {
                                dataCells.push({ x, y, i });
                                i++;
                            } else {
                                headderCells.push({ x, y, i });
                            }
                        } else {
                            break;
                        }
                    }
                }
                gdArr.forEach(gd => {
                    headderCells.forEach(hc => {
                        if (hc.i == gd.pri) {
                            gd.hx = hc.x;
                            gd.hy = hc.y;
                        }
                    })
                    dataCells.forEach(dc => {
                        if (dc.i == gd.pri) {
                            gd.dx = dc.x;
                            gd.dy = dc.y;
                            styles.forEach(sty => {
                                if (sty.name == gd.dstyle.name) {
                                    gd.sty = sty.obj;
                                } else {
                                    gd.sty = defaultStyle;
                                }
                            })
                        }
                    })
                    styles.forEach(sty => {
                        if (sty.name == gd.hstyle.name) {
                            gd.sty = sty.obj;
                        } else {
                            gd.sty = defaultStyle;
                        }
                    })
                });
                thArr.forEach(th => {
                    styles.forEach(sty => {
                        if (sty.name == th.hstyle.name) {
                            th.sty = sty.obj;
                        } else {
                            th.sty = defaultStyle;
                        }
                    })
                })
                gdArr.forEach(gd => {
                    ws.cell(gd.hx, gd.hy)
                        .string(gd.label)
                        .style(gd.sty);
                    ws.cell(gd.dx, gd.dy)[gd.type]((gd.value));
                })
                for (let p = 0; p < thArr.length; p++) {
                    ws.cell(tableStartRow, p + 1)
                        .string(thArr[p].label)
                        .style(thArr[p].sty);
                }
                let row = tableStartRow + 1;
                tdArr.forEach((td) => {
                    td.forEach((d, col) => {
                        ws.cell(row, col + 1)
                            .string(d.value)
                    })
                    row++;
                })
            });

            wb.writeToBuffer().then(function (buffer) {
                resolve(buffer)
            });
        } catch (e) {
            //console.log("Error: ", e);
            reject(e)
        }
    });
};

exports.unwindByField = (arr, f) => {
    return arr.reduce((r, o) => r.concat(o[f].map(v => ({ ...o, [f]: v }))), []);
}