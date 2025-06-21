/*
  Warnings:

  - You are about to drop the column `metaDescription` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `metaTitle` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `alt` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `isDefault` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ProductImage` table. All the data in the column will be lost.
  - Added the required column `karat` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `url` to the `ProductImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductImage" DROP CONSTRAINT "ProductImage_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "metaDescription",
DROP COLUMN "metaTitle",
ADD COLUMN     "karat" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "stockQuantity" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ProductImage" DROP COLUMN "alt",
DROP COLUMN "imageUrl",
DROP COLUMN "isDefault",
DROP COLUMN "priority",
DROP COLUMN "updatedAt",
ADD COLUMN     "publicId" TEXT,
ADD COLUMN     "url" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
