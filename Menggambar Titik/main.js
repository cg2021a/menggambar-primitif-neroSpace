function main(){
    //akses media untuk menggambar
    var canvas = document.getElementById("myCanvas");
    //siapkan tools
    var contex = canvas.getContext("webgl");

    //mendefinisikan titik yang akan dibuat
    var vertexShaderCode = `
    void main(){
        gl_Position =  vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 10.0;
    }`;

    //membuat titi tsb
    var vertexShader = contex.createShader(contex.VERTEX_SHADER);
    contex.shaderSource(vertexShader, vertexShaderCode);
    contex.compileShader(vertexShader);

    //mendefinisikan fragment 
    var fragmentShaderCode = `
    void main(){
        gl_FragColor = vect4(1.0, 0.0, 0.0, 1.0)
    }`

    //membuat warna
    var fragmentShader = conte.createShader(contex.FRAGMENT_SHADER);
    contex.shaderSource(fragmentShader, fragmentShaderCode);
    contex.compileShader(fragmentShader);

    //membuat package program agar data bisa dieksekusi
    var shaderprogram = contex.createProgram();
    contex.attachShader(shaderprogram, vertexShader);
    contex.attachShader(shaderProgram, fragmentShader);
    contex.linkProgram(shaderProgram);
    contex.useProgram(shaderProgram);

    //mendefinisikan background
    contex.clearColor(1.0, 1.0, 1.0, 1.0);
    //membersihkan media untuk menggambar
    contex.clear(contex.COLOR_BUFFER_BIT);

    contex.drawArrays(contex.POINTS,0, 1)
}