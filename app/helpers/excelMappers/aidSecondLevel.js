
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

let aidSecondTabMapping = {
    sheetName: "Second Level",
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
            label: "Batch ID",
            hstyle: header
        },
        {
            pri: 2,
            label: "Scheme/Program/Model",
            hstyle: header
        },
        {
            pri: 3,
            label: "Job Role Name",
            hstyle: header
        },
        {
            pri: 4,
            label: "Batch Type",
            hstyle: header
        },
        {
            pri: 5,
            label: "Batch Start Date",
            hstyle: header
        },
        {
            pri: 6,
            label: "Batch End Date",
            hstyle: header
        },
        {
            pri: 7,
            label: "Special Area Candidates",
            hstyle: header
        },
        {
            pri: 8,
            label: "Batch Creation Date",
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
            key: "batchId",
            type: "string",
            dstyle: data
        },
        {
            pri: 2,
            key: "schemeProgModel",
            type: "string",
            dstyle: data
        },
        {
            pri: 3,
            key: "jobRoleQp",
            type: "string",
            dstyle: data
        },
        {
            pri: 4,
            key: "batchType",
            type: "string",
            dstyle: data
        },
        {
            pri: 5,
            key: "batchStartDate",
            type: "string",
            dstyle: data
        },
        {
            pri: 6,
            key: "batchEndDate",
            type: "string",
            dstyle: data
        },
        {
            pri: 7,
            key: "neCandidateCount",
            type: "string",
            dstyle: data
        },
        {
            pri: 8,
            key: "createdOn",
            type: "string",
            dstyle: data
        }
    ]
};

module.exports = aidSecondTabMapping