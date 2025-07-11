import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';

export async function createDefaultAdmin() {
  const adminEmail = process.env.DEFAULT_ADMIN_EMAIL || 'admin@admin.com';
  const adminPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'admin123';

  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Admin',
        role: 'admin',
      },
    });
    console.log(`Default admin created: ${adminEmail} / ${adminPassword}`);
  } else {
    console.log('Default admin already exists.');
  }
}
