<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IpAddresses;

class IpAddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return json_encode(IpAddresses::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'ip_address' => 'required|ip',
            'description' => 'required',
        ]);

        if($validated){
            $ip = new IpAddresses();
            $ip->ip_address = $request->input('ip_address');
            $ip->description = $request->input('description');
            $ip->save();

            return json_encode(["return"=>"success"]);
        }
    }

      /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return IpAddresses::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ip = IpAddresses::find($id);
        $ip->ip_address = $request->input('ip_address');
        $ip->description = $request->input('description');
        $ip->save();
       
    }
}
