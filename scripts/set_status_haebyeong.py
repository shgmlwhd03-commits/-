import json, sys

path = 'status.json'
status, ticker, now_task, now_state = sys.argv[1:5]
with open(path, encoding='utf-8') as f:
    d = json.load(f)

now = '2026-11-28T06:%02d+09:00' % int(sys.argv[5])
hm = '06:%02d' % int(sys.argv[5])

d['updated'] = now
d['ceo_haebyeong']['status'] = status
d['ceo_haebyeong']['ticker'] = ticker
d['ceo_haebyeong']['nowTask'] = now_task
d['ceo_haebyeong']['nowState'] = now_state
d['ceo_haebyeong']['updated'] = hm

with open(path, 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=1)
    f.write('\n')
print('ok', d['ceo_haebyeong'])
