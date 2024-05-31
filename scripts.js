<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.77">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">&lt;script&gt;</p>
<p class="p1">document.addEventListener("DOMContentLoaded", () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const musicList = [</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ id: 1, name: "Musique 1", url: "musiques/music1.mp3", votes: 0 },</p>
<p class="p1"><span class="Apple-converted-space">        </span>{ id: 2, name: "Musique 2", url: "musiques/music2.mp3", votes: 0 },</p>
<p class="p1"><span class="Apple-converted-space">        </span>// Ajoutez d'autres musiques ici</p>
<p class="p1"><span class="Apple-converted-space">    </span>];</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const musicListContainer = document.getElementById('music-list');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>musicList.forEach(music =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const musicItem = document.createElement('div');</p>
<p class="p1"><span class="Apple-converted-space">        </span>musicItem.className = 'music-item';</p>
<p class="p1"><span class="Apple-converted-space">        </span>musicItem.innerHTML = `</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;h3&gt;${music.name}&lt;/h3&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;audio controls&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;source src="${music.url}" type="audio/mp3"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>Votre navigateur ne supporte pas la balise audio.</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;/audio&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;button onclick="vote(${music.id})"&gt;Votez&lt;/button&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>&lt;p&gt;Votes: &lt;span id="votes-${music.id}"&gt;${music.votes}&lt;/span&gt;&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">        </span>`;</p>
<p class="p1"><span class="Apple-converted-space">        </span>musicListContainer.appendChild(musicItem);</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>window.vote = function(id) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const music = musicList.find(music =&gt; music.id === id);</p>
<p class="p1"><span class="Apple-converted-space">        </span>music.votes += 1;</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.getElementById(`votes-${id}`).textContent = music.votes;</p>
<p class="p1"><span class="Apple-converted-space">        </span>alert(`Merci d'avoir voté pour ${music.name}!`);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">});</p>
<p class="p1">&lt;/script&gt;</p>
</body>
</html>
