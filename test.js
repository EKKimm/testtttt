
const apiUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=beQze%2Flg68s%2FpV9pxkML4N%2B30V7gzh2DDv1yRnic62ZIN5yk6AVSqzJIygmYWi5bbG0LSTKjHIQQDyVS1UyhiQ%3D%3D&returnType=xml&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0";

        const xhr = new XMLHttpRequest(); //리퀘스트 객체를 만든다.
        
            if(xhr.readyState == 4 && xhr.status == 200){
                const jsonObj = JSON.parse(xhr.response); 
                console.log(jsonObj);     
            }  

            xhr.open('GET', apiUrl);
            //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            //xhr.setRequestHeader('Access-Control-Allow-Origin',*);
            //xhr.setRequestHeader('Ping-Other', 'pingpong');
			//xhr.setRequestHeader('Content-Type', 'application/xml');
        xhr.send();
 
               