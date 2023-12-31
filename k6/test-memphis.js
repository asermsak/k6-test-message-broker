import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
    stages: [
        { duration: '5s', target: 10000 },
    ],
};
export default function () {
    const data = JSON.stringify({ content: "Hello Memphis" })
    const res = http.post('http://192.168.3.6:3000/memphis', data, {
        headers: { 'Content-Type': 'application/json' },
    });
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}