import express from 'express'


const router= express.Router();

interface todo {
    title: string;
    description:string;
    id : number;
}

type todos= todo[]

let TODOS:todos= [];

router.post('/todo', async (req,res)=> {
    try{
        const todo: todo= req.body;
        todo.id= TODOS.length+1;
        TODOS.push(todo);
        res.json({message: 'Todo added successfully', todo})
    }catch(err){
        res.status(403).json(err)
    }
});

router.get('/', async (req, res)=> {
    try{
        res.json( TODOS);
    }catch(err){
        res.status(403).json(err)
    }
})

router.patch('/:id', async (req,res)=> {
    try{

        const {id}= req.params;
        const todoIndex= TODOS.findIndex((todo)=> todo.id === Number(id));
        if (todoIndex > -1) {
            const updatedCourse = { ...TODOS[todoIndex], ...req.body };//So, the result is a new object (updatedCourse) that contains all the properties from the original course object and any additional properties or updates from the request body. This is often used in web applications when you want to update an object with new data without modifying the original objects.
            TODOS[todoIndex] = updatedCourse;
            res.json({ message: 'Todo updated successfully' });
          } else {
            res.status(404).json({ message: 'Todo not found' });
          }
        }
    catch(err){
        res.status(403).json(err)
    }
})

router.delete('/:id', async (req,res)=> {
    try{
        const {id}= req.params;
        // const todoIndex= TODOS.findIndex((todo)=> todo.id === Number(id));
        const TodosAfterDeletion= TODOS.filter((todo)=> todo.id != Number(id));
        TODOS= TodosAfterDeletion;
        res.json({message:"Todo deleted successfully"});
    }catch(err){
        res.status(403).json(err)
    }
})

router.get('/:id', async (req,res)=> {
    try{
        const {id}= req.params;
        const todoIndex= TODOS.findIndex((todo)=> todo.id === Number(id));
        
        if(todoIndex>-1){
            res.json(TODOS[todoIndex])
        }else{
            res.status(404).json({ message: 'Todo not found' });
        }
    }catch(err){
        console.log(err);
        
    }
})


export default router
