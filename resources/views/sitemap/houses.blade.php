<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>http://www.pigtravel.top/</loc>
    </url>
    @foreach ($houses as $house)
        <url>
            <loc>{{url($house->id)}}</loc>
            c
        </url>
    @endforeach
</urlset>
