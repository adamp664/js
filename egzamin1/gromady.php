<html>
    <head>
        <meta charset="utf=8">
        <title>Gromady kręgowców</title>
        <link rel="stylesheet" href="style12.css">
    </head>
    <body>
        <div id="menu">
            <div id="linki">
                <a href="gromada-ryby.html">gromada ryb</a>
                <a href="gromada-ptaki.html">gromada ptaków</a>
                <a href="gromada-ssaki.html">gromada ssaków</a>
            </div>
        </div>
        <div id="logo">
            <h2>GROMADY KRĘGOWCÓW</h2>
        </div>
        <div id="main-left">
            <?php

                $connect = mysqli_connect("localhost", "root", "","baza");
                if(!$connect) {
                    echo "Błąd połączenia."; 
                }

                $query = "SELECT id, Gromady_id, gatunek, wystepowanie FROM `zwierzeta` WHERE Gromady_id=4 OR Gromady_id=5";

                $result = mysqli_query($connect,$query);

                while ($row = mysqli_fetch_array($result))
                {
                    echo "<p>".$row[0].". ".$row[2]."</p><p>Występowanie: ".$row[3].", gromada ";
                    if($row[1]==4) echo "ptaki";
                    else echo "ssaki";
                    echo "</p><hr>";
                } 

                mysqli_close($connect);
                
            ?>
        </div>
        <div id="main-right">
            <h1>PTAKI</h1>
            <ol>
                <?php

                    $connect2 = mysqli_connect("localhost", "root", "","baza");
                    if(!$connect2) {
                        echo "Błąd połączenia."; 
                    }
                    
                    $query = "SELECT gatunek, obraz FROM `zwierzeta` WHERE Gromady_id=4";

                    $result2 = mysqli_query($connect2,$query);

                    while ($row2 = mysqli_fetch_array($result2))
                    {
                        echo "<li><a href=".$row2[1].">".$row2[0]."</a></li>";
                    }

                    mysqli_close($connect2);

                ?>
            </ol>
            <img src="sroka.jpg" alt="Sroka zwyczajna, gromada ptaki">
        </div>
        <div id="footer">
            Strona o kręgowca przygotował: 00000000000
        </div>
    </body>
</html>