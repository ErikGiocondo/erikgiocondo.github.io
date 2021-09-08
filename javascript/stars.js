 let scene, camera, renderer, stars, starGeo;

function init() {
    //create scene object
    scene = new THREE.Scene();
    
    //setup camera with facing upward
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI/2;
    
    //setup renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    starGeo = new THREE.BufferGeometry();
    const points = []
    for(let i=0;i<6000;i++) {
        let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
    );
    star.velocity = 0;
    star.acceleration = 0.02;
    points.push(star);
    }
    starGeo.setFromPoints(points);

    let sprite = new THREE.TextureLoader().load('immagini/star.png');
    let starMaterial = new THREE.PointsMaterial({
    color: 0xa1bfc4,
    size: 0.7,
    map: sprite
    });
    stars = new THREE.Points(starGeo,starMaterial);
    scene.add(stars);

    window.addEventListener("resize", onWindowResize, false);

    animate(); 
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//rendering loop
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();



