module.exports = () => {
    const header = {
        name: "blueHeader",
        value: {
            font: {
                color: 'black',
                size: 11,
                bold: true,
            },
            border: {
                left: {
                    style: "thick",
                    color: "black"
                },
                right: {
                    style: "thick",
                    color: "black"
                },
                top: {
                    style: "thick",
                    color: "black"
                },
                bottom: {
                    style: "thick",
                    color: "black"
                }
            },
            fill: {
                type: 'pattern',
                patternType: "solid",
                fgColor: "#70b8ff"
            }
        }
    }

    const data = {
        name: "normal",
        value: {
            font: {
                color: 'black',
                size: 11
            }
        }
    }

    let pmvSheet = {
        sheetName: "",
        styles: [data, header],
        generalDetails: [],
        tableHeadders: [
            {
                pri: 0,
                label: "S.NO.",
                hstyle: header
            },
            {
                pri: 1,
                label: "Project ID",
                hstyle: header
            },
            {
                pri: 2,
                label: "Project Name",
                hstyle: header
            },
            {
                pri: 3,
                label: "Project Proposal ID",
                hstyle: header
            },
            {
                pri: 4,
                label: "TP/PIA/SPIA ID",
                hstyle: header
            },
            {
                pri: 5,
                label: "TP/PIA/SPIA Name",
                hstyle: header
            },
            {
                pri: 6,
                label: "Project Duration",
                hstyle: header
            },
            {
                pri: 7,
                label: "State & District",
                hstyle: header
            },
            {
                pri: 8,
                label: "Type",
                hstyle: header
            }
        ],
        tableMapping: [
            {
                pri: 0,
                key: "slNo",
                type: "string",
                dstyle: data
            },
            {
                pri: 1,
                key: "projectId",
                type: "string",
                dstyle: data
            },
            {
                pri: 2,
                key: "projectName",
                type: "string",
                dstyle: data
            },
            {
                pri: 3,
                key: "projectProposalId",
                type: "string",
                dstyle: data
            },
            {
                pri: 4,
                key: "tpUserName",
                type: "string",
                dstyle: data
            },
            {
                pri: 5,
                key: "nameOfOrganization",
                type: "string",
                dstyle: data
            },
            {
                pri: 6,
                key: "projectDuration",
                type: "string",
                dstyle: data
            },
            {
                pri: 7,
                key: "stateAndDistrict",
                type: "string",
                dstyle: data
            },
            {
                pri: 8,
                key: "type",
                type: "string",
                dstyle: data
            }
        ]
    };
    return pmvSheet;
}