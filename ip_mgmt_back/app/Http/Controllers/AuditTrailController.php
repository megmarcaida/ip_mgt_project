<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AuditTrail;

class AuditTrailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return json_encode(AuditTrail::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $at = new AuditTrail();
        $at->action_made = $request->input('action_made');
        $at->description = $request->input('description');
        $at->ip_address = $this->getRemoteIPAddress();
        $at->save();

        return json_encode(["return"=>"success"]);
    }

    public function getRemoteIPAddress() {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            return $_SERVER['HTTP_CLIENT_IP'];
    
        } else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { 
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        return $_SERVER['REMOTE_ADDR'];
    }

   
}
