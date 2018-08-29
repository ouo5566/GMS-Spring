package com.gms.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/member")
public class MemberController {
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") MemberDTO member) {
		logger.info("Member Controller :: add()");
		memberService.add(member);
		return "auth:member/login.tiles";
	}
/*	
	@RequestMapping("/list")
	public void list() {
		
	}
	@RequestMapping("/search")
	public void search() {
		
	}
	@RequestMapping("/count")
	public void count() {
		
	}
	@RequestMapping("/fileupload")
	public void fileupload() {
		
	}
*/
	@RequestMapping("/retrieve")
	public void retrieve() {
		
	}
	@RequestMapping("/modify")
	public String modify(Model model, @ModelAttribute("member") MemberDTO member) {
		logger.info("Member Controller :: modify()");
		System.out.println(member);
		memberService.modify(member);
		System.out.println(memberService.retrieve(member));
		model.addAttribute("user", memberService.retrieve(member));
		return "login:member/retrieve.tiles";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute MemberDTO member) {
		logger.info("Member Controller :: remove()");
		memberService.remove(member);
		return "redirect:/";
	}
	@RequestMapping("/login")
	public String login(Model model, @ModelAttribute("member") MemberDTO member) {
		logger.info("Member Controller :: login()");
		if(memberService.login(member)) {
			model.addAttribute("user", memberService.retrieve(member));
		}else {
			return "auth:member/login.tiles" ;
		}
		return "login:member/retrieve.tiles";
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("Member Controller :: logout()");
		return "redirect:/";
	}
}
