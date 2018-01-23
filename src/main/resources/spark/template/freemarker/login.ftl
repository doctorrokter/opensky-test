<#include "layout.ftl"/>

<@layout title="Opensky login">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-7 col-md-5 col-sm-offset-2 col-md-offset-3">
                <div class="panel panel-default signing-panel z-depth-1">
                    <div class="panel-body">
                        <form action="/login" method="post">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input name="name" type="text" class="form-control" id="name" placeholder="Name">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input name="password" type="password" class="form-control" id="password" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</@layout>