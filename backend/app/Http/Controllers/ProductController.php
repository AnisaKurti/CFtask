<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function getAll(){
        $data = Product::get();
        return response()->json($data, 200);
      }
 
      public function create(Request $request){
        $data['name'] = $request['name'];
        $data['price'] = $request['price'];
        $data['description'] = $request['description'];
        $data['quantity'] = $request['quantity'];
        Product::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }  
      
      public function get($id){
        $data = Product::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['price'] = $request['price'];
        $data['description'] = $request['description'];
        $data['quantity'] = $request['quantity'];
        Product::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
      public function delete($id){
        $res = Product::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
}
