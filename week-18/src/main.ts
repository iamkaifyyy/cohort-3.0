import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Get all users
app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
});

// Get a single user by ID
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

// Create a user
app.post("/users", async (req: Request, res: Response) => {
  try {
    const { username, password, age, city } = req.body;

    const user = await prisma.user.create({
      data: {
        username,
        password,
        age,
        city,
      },
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
});

// Update a user
app.put("/users/:id", async (req: Request, res: Response) => {
  try {
    const { username, password, age, city } = req.body;

    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        username,
        password,
        age,
        city,
      },
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
});

// Delete a user
app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});