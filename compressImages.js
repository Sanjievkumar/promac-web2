import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Set up directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'src', 'assets', 'Brands', 'Kannegiesser brand');

async function compressFolder() {
  console.log('\n🚀 Starting compression of massive Kannegiesser images...\n');
  
  const files = fs.readdirSync(folderPath);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|JPG)$/i)) {
      const filePath = path.join(folderPath, file);
      const tempPath = path.join(folderPath, `temp_${file}`);
      
      const stats = fs.statSync(filePath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      
      console.log(`Processing: ${file} (Original Size: ${sizeMB} MB)`);
      
      try {
        // Resize to a max width/height of 1000px and compress to 80% quality
        await sharp(filePath)
          .resize(1000, 1000, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 80, force: false }) // keeps PNG as PNG, compresses JPEG
          .png({ compressionLevel: 8, force: false })
          .toFile(tempPath);
          
        // Overwrite original with compressed version
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStats = fs.statSync(filePath);
        const newSizeKB = (newStats.size / 1024).toFixed(2);
        console.log(`  ✅ Compressed down to: ${newSizeKB} KB\n`);
      } catch (err) {
        console.error(`  ❌ Error processing ${file}:`, err.message, '\n');
      }
    }
  }
  console.log('🎉 ALL DONE! Your page will now load instantly.');
}

compressFolder();
