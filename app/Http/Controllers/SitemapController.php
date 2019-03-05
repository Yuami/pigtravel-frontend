<?php
/**
 * Created by PhpStorm.
 * User: Pep Toni
 * Date: 05/03/2019
 * Time: 11:38
 */

namespace App\Http\Controllers;



use App\Vivienda;

class SitemapController extends Controller
{
    public function sitemap()
    {
        return response()->view('sitemap.index')->header('Content-Type', 'text/xml');
    }
    public function houses()
    {
        $houses = Vivienda::sitemapID();

        return response()->view('sitemap.houses', [
            'houses' => $houses,
        ])->header('Content-Type', 'text/xml');
    }
}