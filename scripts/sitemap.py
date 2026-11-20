# Writes dist/sitemap.xml from the built pages. Usage: python3 scripts/sitemap.py dist https://wisdompalace.ae
import os,sys
root,base=sys.argv[1],sys.argv[2].rstrip('/')
urls=[]
for d,_,fs in os.walk(root):
    if 'index.html' in fs:
        rel=os.path.relpath(d,root).replace(os.sep,'/')
        urls.append(base+'/' if rel=='.' else f'{base}/{rel}/')
urls.sort()
with open(os.path.join(root,'sitemap.xml'),'w') as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    for u in urls: f.write(f'  <url><loc>{u}</loc></url>\n')
    f.write('</urlset>\n')
print(len(urls),'urls')
