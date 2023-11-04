const TodoItem = require('../models/todoModel.js');
const { Types } = require('mongoose');



//  Hakee ja tuo kaikki käyttäjät tietokannasta
const getTodoItems = (req, res, next) => {

    console.log("GET all items request");
    TodoItem.find()
        .then(todoItems => res.json(todoItems))
        .catch(error => res.status(400).json('Error :', error));
}



//  Hoitaa rekisteröitymisen eli luodaan siis uusi käyttäjä tietokantaan
//  user_id luodaan täällä ja muut tiedot tuodaan frontendistä 
//  Lopuksi uusi käyttäjä tallennetaan tietokantaan

const addTodoItem = (req, res, next) => {

    const _id = new Types.ObjectId();
    const listName = req.body.listName;
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const date = new Date();

    TodoItem.init();

    const newTodoItem = new TodoItem({
        _id,
        listName,
        title,
        description,
        status,
        date
    });

    newTodoItem.save()
        .then(() => res.json('New user added to database!'))
        .catch(err => res.status(400).json('Error : ' + err));
};



const markTodoDone = async (req, res, next) => {

    const item = await TodoItem.findById(req.params._id);
  
    if (!item) {
      return (res.status(404).send("Tehtävää ei löytynyt"));
    }
    try {
      const updateTodoItem = await TodoItem.findByIdAndUpdate(req.params._id,
        {
            status: "done"
        }
      );
  
      res.send(updateTodoItem);
    }
    catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    };
  
  };




exports.markTodoDone = markTodoDone;
exports.addTodoItem = addTodoItem;
exports.getTodoItems = getTodoItems;