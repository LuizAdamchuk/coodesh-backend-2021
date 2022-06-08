-- CreateTable
CREATE TABLE "cron_job" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "runAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cron_job_pkey" PRIMARY KEY ("id")
);
