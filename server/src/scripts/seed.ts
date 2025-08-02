import dotenv from "dotenv";
import { connectDB } from "../config/db";
import CarProduct from "../models/CarProductSchema";
import { products, MakeGroup, ModelGroup, YearGroup, ProductItem } from "../data/carproducts";

dotenv.config();

const seedProducts = async () => {
  try {
    await connectDB();

  
    await CarProduct.deleteMany({});
    console.log("Old products deleted");

    const flattenedProducts: any[] = [];

    products.forEach((makeGroup: MakeGroup) => {
      makeGroup.models.forEach((modelGroup: ModelGroup) => {
        modelGroup.years.forEach((yearGroup: YearGroup) => {
          yearGroup.products.forEach((p: ProductItem, index: number) => {
            flattenedProducts.push({
              ...p,
            
              id: `${makeGroup.make.toLowerCase()}-${modelGroup.model.toLowerCase().replace(/\s+/g, '')}-${yearGroup.year}-${index + 1}`,
              make: makeGroup.make,
             carModel: modelGroup.model,
              year: yearGroup.year,
            });
          });
        });
      });
    });

   
    const idSet = new Set<string>();
    const duplicates = flattenedProducts.filter(p => {
      if(idSet.has(p.id)) return true;
      idSet.add(p.id);
      return false;
    });

    if(duplicates.length > 0) {
      console.warn("Duplicate IDs found:", duplicates.map(d => d.id));
    } else {
      console.log("No duplicate IDs found");
    }

   
    await CarProduct.insertMany(flattenedProducts);
    console.log("New products inserted");

    process.exit(0)
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seedProducts();
