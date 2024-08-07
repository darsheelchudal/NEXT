import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helper/sendEmailVerification";

export const POST = async (request: Request) => {
  try {
    const { username, email, password } = await request.json();
  } catch (err) {
    console.log("Error registering user", err);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      { status: 500 }
    );
  }
};
