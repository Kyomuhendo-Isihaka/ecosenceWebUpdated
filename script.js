const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});

// login_page
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
	series: [{
	  data: [10, 8, 6, 4, 2],
	  name: "Products",
	}],
	chart: {
	  type: "bar",
	  background: "transparent",
	  height: 350,
	  toolbar: {
		show: false,
	  },
	},
	colors: [
	  "#2962ff",
	  "#d50000",
	  "#2e7d32",
	  "#ff6d00",
	  "#583cb3",
	],
	plotOptions: {
	  bar: {
		distributed: true,
		borderRadius: 4,
		horizontal: false,
		columnWidth: "40%",
	  }
	},
	dataLabels: {
	  enabled: false,
	},
	fill: {
	  opacity: 1,
	},
	grid: {
	  borderColor: "#55596e",
	  yaxis: {
		lines: {
		  show: true,
		},
	  },
	  xaxis: {
		lines: {
		  show: true,
		},
	  },
	},
	legend: {
	  labels: {
		colors: "#f5f7ff",
	  },
	  show: true,
	  position: "top",
	},
	stroke: {
	  colors: ["transparent"],
	  show: true,
	  width: 2
	},
	tooltip: {
	  shared: true,
	  intersect: false,
	  theme: "dark",
	},
	xaxis: {
	  categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
	  title: {
		style: {
		  color: "#f5f7ff",
		},
	  },
	  axisBorder: {
		show: true,
		color: "#55596e",
	  },
	  axisTicks: {
		show: true,
		color: "#55596e",
	  },
	  labels: {
		style: {
		  colors: "#f5f7ff",
		},
	  },
	},
	yaxis: {
	  title: {
		text: "Count",
		style: {
		  color:  "#f5f7ff",
		},
	  },
	  axisBorder: {
		color: "#55596e",
		show: true,
	  },
	  axisTicks: {
		color: "#55596e",
		show: true,
	  },
	  labels: {
		style: {
		  colors: "#f5f7ff",
		},
	  },
	}
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
  

