-- Mentor profile fields used by mentor dashboard/profile editing.
ALTER TABLE "profiles"
  ADD COLUMN IF NOT EXISTS "expertise" JSONB NOT NULL DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS "bio" TEXT,
  ADD COLUMN IF NOT EXISTS "profile_image_url" TEXT,
  ADD COLUMN IF NOT EXISTS "pricing_cents" INTEGER,
  ADD COLUMN IF NOT EXISTS "timezone" TEXT;

-- Availability slots are stored in UTC timestamps. A mentor cannot create two
-- slots with the same UTC start time.
DO $$ BEGIN
  CREATE TYPE "AvailabilityStatus" AS ENUM ('AVAILABLE', 'BOOKED', 'CANCELLED');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "MentorAvailability" (
  "id" TEXT NOT NULL,
  "mentorId" TEXT NOT NULL,
  "startTime" TIMESTAMP(3) NOT NULL,
  "endTime" TIMESTAMP(3) NOT NULL,
  "status" "AvailabilityStatus" NOT NULL DEFAULT 'AVAILABLE',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "MentorAvailability_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "MentorAvailability_mentorId_startTime_key"
  ON "MentorAvailability"("mentorId", "startTime");

CREATE INDEX IF NOT EXISTS "MentorAvailability_mentorId_status_startTime_idx"
  ON "MentorAvailability"("mentorId", "status", "startTime");

DO $$ BEGIN
  ALTER TABLE "MentorAvailability"
    ADD CONSTRAINT "MentorAvailability_mentorId_fkey"
    FOREIGN KEY ("mentorId") REFERENCES "profiles"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "Session"
  ADD COLUMN IF NOT EXISTS "availabilitySlotId" TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS "Session_availabilitySlotId_key"
  ON "Session"("availabilitySlotId");

CREATE INDEX IF NOT EXISTS "Session_mentorId_startTime_idx"
  ON "Session"("mentorId", "startTime");

CREATE INDEX IF NOT EXISTS "Session_studentId_startTime_idx"
  ON "Session"("studentId", "startTime");

DO $$ BEGIN
  ALTER TABLE "Session"
    ADD CONSTRAINT "Session_availabilitySlotId_fkey"
    FOREIGN KEY ("availabilitySlotId") REFERENCES "MentorAvailability"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;
