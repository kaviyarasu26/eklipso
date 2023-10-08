
const background =document.getElementById('astronaut');
const scene = new THREE.Scene();
//scene.background = new THREE.Color( 0xaeaeae );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var moon;
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true}); // Enable anti-aliasing and alpha
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
background.appendChild( renderer.domElement );
//renderer.setClearColor( 0x000000, 0 )

//light
const light1= new THREE.AmbientLight( 0xffffff,10 ); // soft white light
scene.add( light1 );

const light = new THREE.PointLight( 0xffffff,50);
light.position.set( 9.821660002692017, 3.335730897359335, 1.958872488808874 );
scene.add( light );


let loader = new THREE.GLTFLoader();

function loadMoon() {
    loader.load('../model/Astronaut/scene.gltf', function (gltf) {
        moon = gltf.scene
        moon.castShadow = true;
        moon.position.set(0,0,0);
        scene.add(gltf.scene);
		renderer.render( scene, camera );
    });
}

loadMoon()
camera.position.set(0,0,5);

//controls
const controls = new THREE.OrbitControls( camera, renderer.domElement );


function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
    
}

animate();