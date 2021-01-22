import { LightningElement,track,api,wire } from 'lwc';

/*
const actions = [
    { label: 'Show details', name: 'show_details' },
    { label: 'Delete', name: 'delete' }
];

const columns = [
     {label: 'Opportunity name', fieldName: 'opportunityName', type: 'text'},
     {label: 'Confidence', fieldName: 'confidence', type: 'percent', cellAttributes:
     { iconName: { fieldName: 'trendIcon' }, iconPosition: 'right' }},
     {label: 'Amount', fieldName: 'amount', type: 'currency', typeAttributes: { currencyCode: 'EUR'}},
     {label: 'Contact Email', fieldName: 'contact', type: 'email'},
     {label: 'Contact Phone', fieldName: 'phone', type: 'phone'},
];
*/
const data = [
                {
                    id: 'a',
                    name: 'John Elway',
                    type: 'Standard Contact',
                    confidence: 0.2,
                    amount: 25000,
                    contact: 'jelway@test.com',
                    phone: '2352235235',
                    isActive: true,
                    primaryContact: true,
                    primaryProducer: false,
                    isPrimary: true,
                    trendIcon: 'utility:down',
                },
                {
                    id: 'b',
                    name: 'Terrell Davis',
                    type: 'Producer',
                    confidence: 0.78,
                    amount: 740000,
                    contact: 'tdavis@test.com',
                    phone: '2354443577',
                    isActive: false,
                    primaryContact: false,
                    primaryProducer: true,
                    isPrimary: true,
                    trendIcon: 'utility:up',
                },
                {
                    id: 'c',
                    name: 'Melvin Gordon',
                    type: 'Producer',
                    confidence: 0.78,
                    amount: 740000,
                    contact: 'mgordon@test.com',
                    phone: '2354443577',
                    isActive: false,
                    primaryContact: false,
                    primaryProducer: false,
                    isPrimary: false,
                    trendIcon: 'utility:up',
                },
                {
                    id: 'd',
                    name: 'Von Miller',
                    type: 'Standard Contact',
                    confidence: 0.78,
                    amount: 740000,
                    contact: 'vmiller@test.com',
                    phone: '2354443577',
                    isActive: false,
                    primaryContact: false,
                    primaryProducer: false,
                    isPrimary: false,
                    trendIcon: 'utility:up',
                },
                {
                    id: 'e',
                    name: 'Rod Smith',
                    type: 'Standard Contact',
                    confidence: 0.78,
                    amount: 740000,
                    contact: 'rsmith@test.com',
                    phone: '2354443577',
                    isActive: false,
                    primaryContact: false,
                    primaryProducer: false,
                    isPrimary: false,
                    trendIcon: 'utility:up',
                },
                ];

export default class DatatableExample extends LightningElement {
    primaryContact = 'John Elway';
    primaryProducer = 'Terrell Davis';

    data = data;
//    columns = columns;
    
    constructor() {
        super();
        this.columns = [
            // Other column data here
     {label: 'Name', fieldName: 'name', type: 'text'},
     {label: 'Type', fieldName: 'type', type: 'text'},
     {label: 'Phone', fieldName: 'phone', type: 'phone'},
     {label: 'Email', fieldName: 'contact', type: 'email'},
//     {label: 'Status', fieldName: 'isActive', type: 'boolean'},
     {label: 'Primary', fieldName: 'isPrimary', type: 'boolean'},
//     {label: 'Primary Contact', fieldName: 'primaryContact', type: 'boolean'},
//     {label: 'Primary Producer', fieldName: 'primaryProducer', type: 'boolean'},
    { type: 'action', typeAttributes: { rowActions: this.getRowActions } },
        ]
    }

    getRowActions(row, doneCallback) {
        const actions = [];
/*
            if (row['isActive']) {
                actions.push({
                    'label': 'Deactivate',
                    'iconName': 'utility:block_visitor',
                    'name': 'deactivate'
                });
            } else {
                actions.push({
                    'label': 'Activate',
                    'iconName': 'utility:adduser',
                    'name': 'activate'
                });
            }
*/
            if(row['type'] === 'Standard Contact') {
                if (row['isPrimary']) {
                    actions.push({
                        'label': 'Remove Primary Contact',
    //                    'iconName': 'utility:block_visitor',
                        'name': 'rpc'
                    });
                } else {
                    actions.push({
                        'label': 'Make Contact Primary',
    //                    'iconName': 'utility:adduser',
                        'name': 'mcp'
                    });
                }
            }
            else {
                if (row['isPrimary']) {
                    actions.push({
                        'label': 'Remove Primary Producer',
    //                    'iconName': 'utility:block_visitor',
                        'name': 'rpp'
                    });
                } else {
                    actions.push({
                        'label': 'Make Producer Primary',
    //                    'iconName': 'utility:adduser',
                        'name': 'mpp'
                    });
                }

            }
            actions.push({
                'label': 'Edit Relationship',
                'iconName': 'utility:adduser',
                'name': 'editr'
            });
            actions.push({
                'label': 'Remove Relationship',
                'iconName': 'utility:block_visitor',
                'name': 'remover'
            });

            // simulate a trip to the server
            setTimeout(() => {
                doneCallback(actions);
            },200);
    }

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].opportunityName);
        }
    }

    handleRowActions(event) {
        var actionName = event.detail.action.name;
        var row = event.detail.row;
        const tempData = [];
//        console.log('actionName=' + actionName);            
//        console.log('row.id=' + row.id);            
/*
    for (let i = 0; i < this.data.length; i++){
            console.log("You selected: " + this.data[i].id + " PrimaryContact=" + this.data[i].primaryContact);
            this.data[i].primaryContact = false;
            this.data[i].primaryProducer = false;
            tempData.push(this.data[i]);
            console.log("tempData: " + tempData[i].id + " PrimaryContact=" + tempData[i].primaryContact);

        }
*/
        switch (actionName) {
            case 'rpc':
                this.primaryContact = "";
//                row.primaryContact = false;
//                this.data[0].primaryContact = false;
                for (let i = 0; i < this.data.length; i++){
                    if(this.data[i].type == 'Standard Contact') {
                    this.data[i].primaryContact = false;
                    this.data[i].isPrimary = false;
                    }
                    tempData.push(this.data[i]);
                }
                break;
            case 'mcp':
                this.primaryContact = row.name;
                for (let i = 0; i < this.data.length; i++){
                    if(this.data[i].id === row.id) {
                        this.data[i].primaryContact = true;
                        this.data[i].isPrimary = true;
                        tempData.push(this.data[i]);
                    }
                    else{
                    if(this.data[i].type == 'Standard Contact') {
                        this.data[i].primaryContact = false;
                        this.data[i].isPrimary = false;
                    }
                        tempData.push(this.data[i]);
                    }
                }
//                tempData[row.id].primaryContact = true;
                break;
            case 'rpp':
                this.primaryProducer = "";
                for (let i = 0; i < this.data.length; i++){
                    if(this.data[i].type == 'Producer') {
                    this.data[i].primaryProducer = false;
                    this.data[i].isPrimary = false;
                    }
                    tempData.push(this.data[i]);
                }
                break;
            case 'mpp':
                this.primaryProducer = row.name;
                for (let i = 0; i < this.data.length; i++){
                    if(this.data[i].id === row.id) {
                        this.data[i].primaryProducer = true;
                        this.data[i].isPrimary = true;
                        tempData.push(this.data[i]);
                    }
                    else{
                    if(this.data[i].type == 'Producer') {
                        this.data[i].primaryProducer = false;
                        this.data[i].isPrimary = false;
                    }
                        tempData.push(this.data[i]);
                    }
                }
                break;
            default:
                break;
        }
                this.data = tempData;

    }

}