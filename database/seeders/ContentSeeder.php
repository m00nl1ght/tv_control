<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Content;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $content = new Content();
        $content->title = 'Контент_1';
        $content->url = 'url_1';
        $content->save();

        $content = new Content();
        $content->title = 'Контент_3';
        $content->url = 'url_3';
        $content->save();

        $content = new Content();
        $content->title = 'Контент_2';
        $content->url = 'url_2';
        $content->save();
    }
}
