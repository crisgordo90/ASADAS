<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ASADAS.Default" %>
<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="BodyContent"  runat="server">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>    
     <link href="Css/Site.css" rel="stylesheet" />
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
     <script src="Scripts/BingMap.js" type="text/javascript"></script>
     <script type="text/javascript" src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&mkt=en-gb"></script>
</head>
<body onload="LoadMap();" onunload="UnloadMap();">
    <div id="myMap" class="map"></div><br/>
    <div>
        <b>Click the map to add a pushpin at that point.</b> 
        <input id='textBox' type="text" style="width:250px;"/>
    </div>
</body>
</html>
</asp:Content>
