const {people} = require("../data");

const getPeoples = (req,res) => {
    res.status(200).send(people);
}

const getPeopleById = (req,res) => {
    const {id} = req.params;
    console.log(id)
    const specificPeople = people.find(item => item.id === +id);
    if(!specificPeople){
        res.status(400).send("Please provide the correct id")
    }else{
        res.status(200).send(specificPeople)
    }
}

const createPeople = (req,res) => {
    const {name} = req.body;
    people.push({id:people.length + 1,name})
    res.status(200).send(people)
}

const updatePeopleById = (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    const specificPeople = people.find(item => item.id === +id);
    if(!specificPeople){
        res.status(400).send("Please provide the correct id")
    }else{
        // specificPeople.name = name;
        let newPeoples = people.map((person) => {
            if(person.id === +id){
                console.log("something")
                person.name = name;
            }
            return person;
        })
        res.status(200).send(newPeoples)
    } 
}

const deletePeopleById = (req,res) => {
    const {id} = req.params;
    const specificPeople = people.find(item => item.id === +id);
    if(!specificPeople){
        res.status(400).send({data:{message:"Could not find the user by given id"}})
    }else{
       let filteredPeople = people.filter(item => item.id != +id)
        res.status(200).send(filteredPeople)
    }
}

module.exports = {
    getPeoples,
    getPeopleById,
    createPeople,
    updatePeopleById,
    deletePeopleById
}