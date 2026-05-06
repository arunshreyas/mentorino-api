const bcrypt = require('bcrypt');

async function hashPassword() {
  const password = process.argv[2] || 'admin123';
  const saltRounds = 12;
  
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log('\n========================================');
  console.log('Password:', password);
  console.log('Hash:', hashedPassword);
  console.log('========================================\n');
  
  // Verify it works
  const isValid = await bcrypt.compare(password, hashedPassword);
  console.log('Verification:', isValid ? '✅ Valid' : '❌ Invalid');
}

hashPassword();
