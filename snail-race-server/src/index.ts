import express, {Request, Response} from "express";

const app = express()
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
