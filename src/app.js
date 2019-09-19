/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const PORT = process.env.PORT || 8081;
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  });

export const server = app.listen(PORT, () => {
    console.log(`server live on PORT: ${PORT}`)
})

export default app;
