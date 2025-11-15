const Recipe = require("../models/Recipe");
const  SavedRecipe  = require("../models/saveRecipe");


const add = async (req, res) => {
    const {
        title, inst, ing1, ing2, ing3, ing4,
        qty1, qty2, qty3, qty4, imgurl
    } = req.body;

    try {
        const recipe = await Recipe.create({
            title,
            inst,
            ing1,
            ing2,
            ing3,
            ing4,
            qty1,
            qty2,
            qty3,
            qty4,
            imgurl,
            user: req.user
        });

        return res.status(201).json({ message: "Recipe created successfully!", recipe });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getAllRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.find();
       
        return res.status(200).json({message:"success fully", recipe });
        
        
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch recipes" });
    }
};


const getRecipeById = async (req, res) => {
    const id = req.params.id;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe does not exist" });
        }
        return res.status(200).json({ message: "Recipe id success", recipe });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getRecipeByUserId = async (req, res) => {
    const userId = req.params.id;
    try {
        const recipes = await Recipe.find({ user: userId });
        return res.status(200).json({ message: "Recipes userid successfully", recipes });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

const savedRecipeById = async (req, res) => {
    const id = req.params.id;

    try {
        const recipe = await SavedRecipe.findOne({ recipe: id });
        if (recipe) {
            return res.status(409).json({ message: "Recipe already saved" });
        }

        recipe = await SavedRecipe.create({ recipe: id });
        return res.status(201).json({ message: "Recipe saved successfully", recipe });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};


const getSavedRecipe=async(req,res)=>{
    const recipe=await SavedRecipe.find();
    return res.status(506).json({recipe})
}

module.exports = {
    add,
    getAllRecipe,
    getRecipeById,
    getRecipeByUserId,
    savedRecipeById,
    getSavedRecipe
};


