import express, {Request, Response} from "express";

const app = express()
const port = process.env.PORT || 8000;

app.get('/results', (req: Request, res: Response) => {
    res.json({races:[
            {id:123465, date:Date.now(), podium:[{number:5, name : 'Wind'}, {number:3, name:'Jacky brown'}, {number:22, name:'bill'}]}
        ]})
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
