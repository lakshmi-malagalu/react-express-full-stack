export const defaultState = {

    user:[{id:"U1", name:"Dev"},{id:"U2", name:"Tes"}],
    groups:[{id:"G1",name:"ToDo",user:"U1"},{id:"G2",name:"Doing",user:"U2"},{id:"G3",name:"Done",user:"U1"}],
    tasks:[{id:"T1",name:"Refractor Tests",group:"G1",user:"U1", isComplete:false},{id:"T2",name:"Clean Up",group:"G2",user:"U2", isComplete:false}],
    comments:[{id:"C1",user:"U1", task:"T1", description:"Job well done!"},{id:"C2",user:"U2", task:"T2", description:"Great Job!!"}]
}