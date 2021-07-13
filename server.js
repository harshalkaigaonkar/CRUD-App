const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/Post');

const connectDB = async () => {
    try {
        await mongoose.connect(
            //MONGO URI
            'mongodb+srv://harshal_k:harshal12345@cluster0.ftim8.mongodb.net/PanCake?retryWrites=true&w=majority'
            , {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

//Create a new Post

// app.post('/create', (req, res) => {
//     try {
//         //main code
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({error: {message: "Server Error!"}})
//     }
// })

app.post('/', async (req, res) => {
    const data = req.body;
    try {
        const post = new Post(data);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: { message: "Server Error!" } })
    }
})

app.get('/', async (req, res) => {
    try {
        const post = await Post.find().limit(10).sort({ date: -1 });
        if (post) {
            return res.status(200).send(post);
        }
        res.status(404).json({ error: { message: "Posts Not Found!" } });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: { message: "Server Error!" } })
    }
})

app.put('/:id', async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    try {
        const post = await findById(id);
        if (!post) { return res.status(404).json({ error: { message: "Posts Not Found!" } }); }
        post = await Post.findByIdAndUpdate(
            id,
            { $set: data },
            { new: true },
        );
        res.status(200).send(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: { message: "Server Error!" } })
    }
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (!post) { return res.status(404).json({ error: { message: "Post Not Found!" } }) };
        await Post.findByIdAndRemove(id);
        res.status(200).json({ success: { message: "Post Deleted.." } })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: { message: "Server Error!" } })
    }
})


// app.get('/', (req, res) => {
//     res.send('Hello, World');
// })

const Port = 3001;

app.listen(Port);