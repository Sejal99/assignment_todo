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
//patch route
router.patch('/:id', async (req,res)=> {
    try{

        const {id}= req.params;
        const todoIndex= TODOS.findIndex((todo)=> todo.id === Number(id));
        if (todoIndex > -1) {
            const updatedCourse = { ...TODOS[todoIndex], ...req.body };
            TODOS[todoIndex] = updatedCourse;
            res.json({ message: 'Todo updated successfully' });
          } else {
            res.status(404).json({ message: 'Todo not found' });
          }
        }
    catch(err){
        res.status(403).json(err) // throw error
    }
})

router.delete('/:id', async (req,res)=> {
    try{
        const {id}= req.params;
    
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
