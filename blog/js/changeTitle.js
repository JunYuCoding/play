var OriginTitile = document.title;
    	    var titleTime;
    	    document.addEventListener('visibilitychange', function() {
    	        if (document.hidden) {
    	            document.title = '😱页面奔溃了~' + OriginTitile;
    	            clearTimeout(titleTime);
    	        }
    	        else {
    	            document.title = '==(￣▽￣*)又好了了~ ' + OriginTitile;
    	            titleTime = setTimeout(function() {
    	                document.title = OriginTitile;
    	            }, 2000);
    	        }
    	    });