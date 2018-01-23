<#include "layout.ftl"/>

<@layout title="Opensky dashboard">
    <div id="main_container">
        <h1 class="text-center">${message}</h1>
    </div>

    <script type="text/javascript">
        window.user = JSON.parse('${user}');
    </script>
    <#if env == "development">
        <script type="text/javascript" src="http://localhost:3000/dist/main.js"></script>
    <#else>
        <script type="text/javascript" src="/js/main.js"></script>
    </#if>

</@layout>