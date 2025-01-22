import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import url from 'node:url';
import mockjs from 'mockjs';

const viteMockServices = (): PluginOption => {
    return {
        name: 'vite-mock-service',
        configureServer(server) {
            server.middlewares.use('/api/list', (req, res) => {
                const parseUrl = url.parse(req.originalUrl!, true);
                const query = parseUrl.query;
                res.setHeader('Content-type', 'application/json');
                const data = mockjs.mock({
                    'list|1000': [
                        {
                            'id|+1': 1,
                            name: query.keyWord,
                            address: '@county(true)',
                        },
                    ],
                });
                res.end(JSON.stringify(data));
            });
        },
    };
};

export default defineConfig({
    plugins: [react(), viteMockServices()],
});
