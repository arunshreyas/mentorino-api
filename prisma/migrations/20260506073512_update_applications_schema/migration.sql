/*
  Warnings:

  - You are about to drop the column `responses` on the `applications` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `applications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `applications` table without a default value. This is not possible if the table is not empty.
  - Made the column `mentor_type` on table `applications` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "applications_user_email_key";

-- AlterTable
ALTER TABLE "applications" DROP COLUMN "responses",
ADD COLUMN     "ai_score" DOUBLE PRECISION,
ADD COLUMN     "attribution" TEXT,
ADD COLUMN     "experience" TEXT,
ADD COLUMN     "frequency" TEXT,
ADD COLUMN     "goals" TEXT,
ADD COLUMN     "meeting_preference" TEXT,
ADD COLUMN     "notes" JSONB,
ADD COLUMN     "pillar" TEXT,
ADD COLUMN     "seriousness" INTEGER,
ADD COLUMN     "source" TEXT,
ADD COLUMN     "tags" JSONB,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL,
ADD COLUMN     "user_phone" TEXT,
ALTER COLUMN "mentor_type" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
