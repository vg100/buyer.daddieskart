import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';
import path from 'path';

dotenv.config();
export default defineConfig(({mode})=>({
  mode: mode === 'production' ? 'production' : 'development',
  plugins: [react()],
  entry: {
    theme: './src/assets/scss/theme.scss',
    user: './src/assets/scss/user.scss'
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'layouts': path.resolve(__dirname, 'src/layouts'),
      'data': path.resolve(__dirname, 'src/data'),
      'providers': path.resolve(__dirname, 'src/providers'),
      'reducers': path.resolve(__dirname, 'src/reducers'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'helpers': path.resolve(__dirname, 'src/helpers'),
      'config': path.resolve(__dirname, 'src/config'),
    },
  },
  define: {
    'process.env': process.env
  }
}));
