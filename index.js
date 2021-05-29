import {config} from 'dotenv';
import {Client} from 'discord.js';
import MLBStatsAPI from 'mlb-stats-api';
import route from './router.js';

config();

const client = new Client();
const mlbStats = new MLBStatsAPI();

client.on('message', route);

client.login(process.env.TOKEN);

export default mlbStats;
