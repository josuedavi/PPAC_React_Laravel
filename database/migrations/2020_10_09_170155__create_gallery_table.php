<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGalleryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      
            Schema::create('gallery', function($table) {
         
            $table->foreignId('id')->nullable()->index();
           
            $table->longText('titleGallery');
            $table->longText('descGallery');
            $table->string('imgFullNameGallery', 200);
            $table->longText('orderGallery');
           
        });
      
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
          Schema::dropIfExists('gallery');
    }
}
