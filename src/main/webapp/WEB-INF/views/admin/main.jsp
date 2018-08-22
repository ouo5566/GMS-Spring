<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<body>
<!-- 최상위의 div -->
<div id="wrapper">
	<div id="header">
		<jsp:include page="../common/title-box.jsp"/>
		<jsp:include page="../common/menu-box.jsp"/>
	</div>
	<div id="content">
		<jsp:include page="../member/search.jsp"/>
	</div>
	<jsp:include page="../common/footer.jsp"/> 
</div>
<script>
	admin.main('${context}');
</script>
</body>
</html>