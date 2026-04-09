const https = require('https');
https.get('https://raw.githubusercontent.com/piyush-eon/ai-career-coach/main/app/(main)/dashboard/_components/dashboard-view.jsx', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        if (data.includes('404: Not Found')) {
            https.get('https://raw.githubusercontent.com/piyush-eon/sensai/main/app/(main)/dashboard/_components/dashboard-view.jsx', (res2) => {
                let data2 = '';
                 res2.on('data', chunk => data2 += chunk);
                 res2.on('end', () => console.log(data2.substring(0, 3000)));
            });
        } else {
            console.log(data.substring(0, 3000));
        }
    });
});
