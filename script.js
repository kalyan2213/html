<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BG color with js</title>
    <style type="text/css">
        #my col{
            width:10px;
            height:10px;
            background: blue;
            border:1px solid #000;
        }
        #my col2{
            width:40px;
            height: 40px;
            background: rebeccapurple;
            border:1px solid #000;
        }
        #my text1{
            width:10px;
            height: 10px;
            background: navajowhite;
            border: 1px solid #000;
        }
    </style>
    <script type="text/javascript">
        function rcol()
        {
            document.bgColor="red";
        }
        function bcol()
        {
            document.bgColor="blue";
        }
        function gcol()
        {
            document.bgColor="green";
        }
        function mcol()
        {
            document.bgColor="#f1f339";
        }
        function mcol2()
        {
            document.bgColor="#f346f5";
        }
        function tpink()
        {
            document.fgColor="#ff66ff";
        }
    </script>
</head>
<body>
    <p>this java script format function</p>
    <input type="button" value="red" onclick="rcol()">
    <input type="button" value="blue" onclick="bcol()">
    <input type="button" value="green" onclick="gcol()">
    <input type="button" value="mycol" onclick="mcol()">
    <input type="button" value="mycol2" onclick="mcol2()">
    <h3>text color</h3>
    <input type="button" id="mytext1" onclick="tpink()">
    
</body>
</html>

