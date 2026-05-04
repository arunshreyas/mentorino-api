/*
  Warnings:

  - The `role` column on the `profiles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `password` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MENTOR', 'ADMIN');

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "password" TEXT NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
