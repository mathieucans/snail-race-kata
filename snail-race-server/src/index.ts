import express, {Request, Response} from "express";
import {SnailRaceServer} from "./SnailRaceServer";

const app = express()
const port = process.env.PORT || 8000;

const server = new SnailRaceServer();
app.get('/results', (req: Request, res: Response) => {
    res.json({races: server.races()})
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
