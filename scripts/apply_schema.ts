import { Client } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const connectionString = `postgresql://postgres:${process.env.SUPABASE_DB_PASSWORD}@aws-0-ap-south-1.pooler.supabase.com:6543/postgres`;

async function applySchema() {
    const client = new Client({
        connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        console.log('Connecting to Supabase database...');
        await client.connect();
        console.log('Connected successfully.');

        const migrationFiles = fs.readdirSync(path.join(process.cwd(), 'supabase/migrations'));
        const latestMigration = migrationFiles.sort().pop();
        
        if (!latestMigration) {
            console.error('No migration file found.');
            return;
        }

        console.log(`Applying migration: ${latestMigration}...`);
        const sql = fs.readFileSync(path.join(process.cwd(), 'supabase/migrations', latestMigration), 'utf8');
        
        await client.query(sql);
        console.log('Schema applied successfully!');
    } catch (err) {
        console.error('Error applying schema:', err);
    } finally {
        await client.end();
    }
}

applySchema();
